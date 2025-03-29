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
  - Logged-in user → All menu items except `/questionbank-editor`.
  - Admin → Full access.

---

## Quiz Functionality & Firebase Data Handling

### Data Loading & Storage

Currently, the app loads data ONCE WHEN THE COMPONENT LOADS IN FIRST from `userLocalDatabase.js` and maintains it within components. The updated functionality should:

- Fetch data from Firebase instead of `userLocalDatabase.js`:
  - `userPrivateCollectionsBank`
  - `userNotesBank`
  - `userQuestionData`
  - `usersCommentsBank` (stored in a separate Firebase collection not in users collection)
- Ensure data is only loaded once and stored in state.
- The question bank (`hajduflyTestBank.js`) remains unchanged.

### Firebase Data Synchronization

The app should function as it currently does but additionally save changes to Firebase when modifying local state.
Only modification is that in the comment section loged in user can see the ... menu, edit , delete option only for its own comments or replys.

#### Data Save Points in `QuizApp.js`

- **Line 155:** `saveUserTestData`
- **Line 173:** `updateUserWrongAnswers`
- **Line 199:** `updateUserSeenQuestions`

#### Other Firebase Saves

- **Private Collections (`privateCollections.js`)**

  - Fetch `userPrivateCollectionsBank` from Firebase instead of `userLocalDatabase.js`.
  - **Line 16:** `handleSaveCollection`
  - **Line 48:** `handleToggleQuestionInCollection`

- **Private Notes (`privateNote.js`)**

  - Fetch `userNotesBank` from Firebase instead of `userLocalDatabase.js`.
  - **Line 20:** `handleSaveNote`
  - **Line 27:** `handleDeleteNote`

- **Comment Section (`CommentSection.js`)**
  - Fetch `usersCommentsBank` from Firebase instead of `userLocalDatabase.js`.
  - **Line 30:** `saveComment`
  - **Line 78:** `deleteComment`
  - **Line 112:** `saveEdit`
  - **Line 142:** `handleLike`
  - **Line 186:** `handleDislike`

---

## Summary

The task involves integrating Firebase authentication and Firestore database management into the existing quiz app. Users should be able to log in, manage their data, and store quiz-related interactions securely. Firebase will replace `userLocalDatabase.js` for data handling while maintaining the app's existing structure and functionality.
