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

Currently, the app loads data ONCE WHEN THE QuizApp.js COMPONENT LOADS IN FIRST from `userLocalDatabase.js` and maintains the data within the components. 

## Task 1
- Fetch data from Firebase instead of `userLocalDatabase.js` and `usersCommentsBank.js`:

- Fetches the data from the loged in user's Collection:
  - `userNotesBank`
  - `userPrivateCollectionsBank`
  - `userQuestionData`

- Fetches the data from Firestore for the comments:
  - `usersCommentsBank` (stored in a separate Firebase collection not in "users" collectionm its already created in Firebase)

Here are the locations where data is currently loaded from local files currently:

### userNotesBank
- QuizApp.js line 3
- privateNote.js line 3

### userPrivateCollectionsBank
- QuizApp.js line 4
- privateCollections.js line 4

### usersCommentsBank
- QuizApp.js line 5
- CommentSection.js line 5
- QuestionViewer.js line 9

### userQuestionData
- useQuizConfig.js line 4

These locations can be modified to fetch the corresponding data from Firebase as the component loads.

- Ensure data is only loaded once from Firebase and stored in state like now so it takes only 4 reads.
- The question bank (`hajduflyTestBank.js`) remains unchanged.

### Firebase Data Synchronization

## Task 2-A
The app should function as it currently does but ADDITIONALY save changes to Firebase too.
The firebase rule is that the users can read and save their own datas only.


#### Data Save Points in `QuizApp.js`

- **Line 155:** `saveUserTestData` to the firebase user's "userPreviousTests"
- **Line 173:** `updateUserWrongAnswers` to the firebase user's userQuestionData -> wrongAnswers
- **Line 199:** `updateUserSeenQuestions` to the firebase user's userQuestionData -> seenQuestions

## Task 2-B

#### Other Firebase Saves

- **Private Collections (`privateCollections.js`)**
  - **Line 16:** `handleSaveCollection` to the firebase user's "userPrivateCollectionsBank"
  - **Line 48:** `handleToggleQuestionInCollection`  to the firebase user's "userPrivateCollectionsBank"
## Task 2-C
- **Private Notes (`privateNote.js`)**
  - **Line 20:** `handleSaveNote` to the firebase user's "userNotesBank"
  - **Line 27:** `handleDeleteNote` to the firebase user's "userNotesBank"


## Task 3

- **Comment Section (`CommentSection.js`)**
  - **Line 30:** `saveComment`
  - **Line 78:** `deleteComment`
  - **Line 112:** `saveEdit`
  - **Line 142:** `handleLike`
  - **Line 186:** `handleDislike`

This is a bit more complex, but I think you just have to add the savings deletes like stuffs to the firebase usersCommentsBank collection. 
The firebase rule here is that everyone can save comments, reply,  put like dislike, but can edit/delete only their own comments or reply. 
Only modification is that in the comment section loged in user can see the ("... menu", "edit" , "delete" option only for its own comments or replys.  
---

## Summary

The task involves integrating Firebase authentication and Firestore database management into the existing quiz app. Users should be able to log in, manage their data, and store quiz-related interactions securely. Firebase will replace `userLocalDatabase.js` for data handling while maintaining the app's existing structure and functionality.
