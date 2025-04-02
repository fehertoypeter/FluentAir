# Development Tasks

## Overview

This is a quiz application designed for a glider pilot group. The app retrieves questions from a test bank stored in the `data` folder (`hajduflyTestbank.js`). Users can configure their quiz through various filters in `tests/Quiz/hooks/useQuizConfig.js`. Additional features include:

- Writing private notes
- Posting public comments
- Creating collections to store selected questions

---

## Firebase Integration

### 1. User Registration & Authentication

- Implement Firebase authentication using Gmail/email login via the existing `SignIn` and `SignUp` components in the `auth` folder.
- Upon new user registration, automatically create the following fields in Firebase:
  ```js
  uid: user.uid,
  email: user.email,
  displayName: displayName,
  photoURL: photoURL,
  role: "user",
  createdAt: serverTimestamp(),
  userNotesBank: {},
  userPreviousTests: [],
  userPrivateCollectionsBank: [],
  userQuestionData: {
    seenQuestions: [],
    wrongAnswers: []
  }
  ```
- Ensure security, possibly using Firebase Functions.
- The profile menu should only be visible when the user is logged in.
- Set the logout function to the logout button in the profile menu.
- User data should be accessible throughout the app for various features.

### 2. User Roles & Permissions

- Users can only modify their own data.
- Admins (manually assigned in Firebase) have full access and can modify all data.

### 3. Protected Routes

- **Not logged-in users:** Can only access `/sign-in` and `/sign-out` pages. Any other route redirects them to `/sign-in`.
- **Logged-in users:** Can access all pages **except** `/questionbank-editor, /testpage, /testpage/:contentId`.
- **Admins:** Can access everything.
- The navigation menu should adapt based on authentication status:
  - Not logged in → No menu items visible.
  - Logged-in user → All menu items except `/questionbank-editor, /testpage, /testpage/:contentId`.
  - Admin → Full access.

---

## Quiz Functionality & Firebase Data Handling

### Data Loading & Storage

Currently, the app loads data ONCE WHEN THE QuizApp.js COMPONENT LOADS IN FIRST from `userLocalDatabase.js` and `usersCommentsBank.js`and maintains the data within the components.

## Task 1

- Fetch data from Firebase instead of `userLocalDatabase.js` and `usersCommentsBank.js`:

- Fetches the data from the loged in user's Collection:

  - `userNotesBank`
  - `userPrivateCollectionsBank`
  - `userQuestionData`

- Fetches the data from Firestore for the comments:
  - `usersCommentsBank` (stored in a separate Firebase collection not in "users" collectionm its already created in Firebase)

# Data Loading Reference

## Current Implementation (Local Files)

| Data Source                  | Import Locations                                             |
| ---------------------------- | ------------------------------------------------------------ |
| `userNotesBank`              | `QuizApp.js:3`, `privateNote.js:3`                           |
| `userPrivateCollectionsBank` | `QuizApp.js:4`, `privateCollections.js:4`                    |
| `usersCommentsBank`          | `QuizApp.js:5`, `CommentSection.js:5`, `QuestionViewer.js:9` |
| `userQuestionData`           | `useQuizConfig.js:3`                                         |

## Migration Notes

These import locations represent the current local file data sources that should be replaced with Firebase data fetching implementations during component loading.

- Ensure data is ONLY LOADED ONCE Like now, from Firebase and stored in state like now so it takes only 4 reads.
- The question bank (`hajduflyTestBank.js`) remains unchanged.

# Firebase Integration Specification

## Overview

The application must maintain all existing functionality while adding Firebase synchronization. All data operations must respect Firebase security rules.

---

## Task 2-A: Quiz Data Synchronization

### Location: `QuizApp.js`

| Function                  | Line | Firebase Path                                   | Data Operation           | Security Rule       |
| ------------------------- | ---- | ----------------------------------------------- | ------------------------ | ------------------- |
| `saveUserTestData`        | 161  | `users/{userId}/userPreviousTests`              | Write test results       | User-specific write |
| `updateUserWrongAnswers`  | 179  | `users/{userId}/userQuestionData/wrongAnswers`  | Update incorrect answers | User-specific write |
| `updateUserSeenQuestions` | 205  | `users/{userId}/userQuestionData/seenQuestions` | Track viewed questions   | User-specific write |

---

## Task 2-B: Collections Management

### Location: `privateCollections.js`

| Function                           | Line | Firebase Path                                              | Data Operation          | Notes                       |
| ---------------------------------- | ---- | ---------------------------------------------------------- | ----------------------- | --------------------------- |
| `handleSaveCollection`             | 16   | `users/{userId}/userPrivateCollectionsBank`                | Create collection       | Include collection metadata |
| `handleToggleQuestionInCollection` | 48   | `users/{userId}/userPrivateCollectionsBank/{collectionId}` | Modify collection items | Atomic array operations     |

---

## Task 2-C: Notes Management

### Location: `privateNote.js`

| Function           | Line | Firebase Path                               | Data Operation  | Trigger Condition      |
| ------------------ | ---- | ------------------------------------------- | --------------- | ---------------------- |
| `handleSaveNote`   | 20   | `users/{userId}/userNotesBank/{questionId}` | Set/update note | On note content change |
| `handleDeleteNote` | 33   | `users/{userId}/userNotesBank/{questionId}` | Delete node     | When note is emptied   |

---

## Task 3: Comment Section

### Location: `CommentSection.js`

### Firebase Rules

- **Read**: Public
- **Write**:
  - Create: All authenticated users
  - Update/Delete: Only content owner
  - Likes: Increment/decrement by any user

### Functional Requirements

| Function        | Line | Firebase Path                                | Operation | UI Consideration    |
| --------------- | ---- | -------------------------------------------- | --------- | ------------------- |
| `saveComment`   | 30   | `comments/{questionId}/{commentId}`          | Create    | Add author metadata |
| `deleteComment` | 78   | `comments/{questionId}/{commentId}`          | Delete    |                     |
| `saveEdit`      | 112  | `comments/{questionId}/{commentId}`          | Update    |                     |
| `handleLike`    | 142  | `comments/{questionId}/{commentId}/likes`    | Increment |                     |
| `handleDislike` | 186  | `comments/{questionId}/{commentId}/dislikes` | Increment |                     |

Only modification is that in the comment section loged in user can see the ("... menu", "edit" , "delete" option only for its own comments or replys.

---
