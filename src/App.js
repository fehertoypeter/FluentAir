import React, { useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { TopBarProvider } from "./components/topbar/TopBarContext";
import TopBar from "./components/topbar/TopBar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Loader from "./components/Loader/Loader";
import RequireAdmin from "./components/ProtectedRoutes/RequireAdmin";
import RequireAuth from "./components/ProtectedRoutes/RequireAuth";

import "./App.css";
import "./styles/dark.css";
import "./styles/light.css";

// Lazy load pages
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const QuizZone = lazy(() => import("./pages/QuizZone/QuizZone"));
const AcousticMemory = lazy(() =>
  import("./pages/AcousticMemory/AcousticMemory")
);
const NumberPairConcentrationPage = lazy(() =>
  import("./pages/NumberPairConcentration/NumberPairConcentration")
);
const FluentAirBlog = lazy(() => import("./pages/FluentAirBlog/FluentAirBlog"));
const Support = lazy(() => import("./pages/Support/Support"));
const SignIn = lazy(() => import("./Auth/SignIn"));
const SignUp = lazy(() => import("./Auth/SignUp"));
const SubscriptionOptions = lazy(() =>
  import("./pages/Subscription/SubscriptionOptions/SubscriptionOptions")
);
const TestPage = lazy(() => import("./pages/TestPage/TestPage"));
const QuestionBankEditorPage = lazy(() =>
  import("./pages/QuestionBankEditor/QuestionBankEditor")
);
const AccountSettings = lazy(() =>
  import("./pages/AccountSettings/AccountSettings")
);

function AppContent({ testModeOn, setTestModeOn }) {
  const location = useLocation();
  const hideNavAndTopBar = ["/sign-in", "/sign-up"].includes(location.pathname);

  return (
    <div>
      {!testModeOn && !hideNavAndTopBar && <Navbar />}
      {!hideNavAndTopBar && <TopBar testModeOn={testModeOn} />}
      <div className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* PROTECTED ROUTES (logged-in users only) */}
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/practice/:view?"
              element={
                <RequireAuth>
                  <QuizZone setTestModeOn={setTestModeOn} />
                </RequireAuth>
              }
            />
            <Route
              path="/practice"
              element={
                <RequireAuth>
                  <QuizZone setTestModeOn={setTestModeOn} />
                </RequireAuth>
              }
            />
            <Route
              path="/practice/exams"
              element={
                <RequireAuth>
                  <QuizZone setTestModeOn={setTestModeOn} />
                </RequireAuth>
              }
            />
            <Route
              path="/practice/exam-configuration"
              element={
                <RequireAuth>
                  <QuizZone setTestModeOn={setTestModeOn} />
                </RequireAuth>
              }
            />
            <Route
              path="/practice/exam"
              element={
                <RequireAuth>
                  <QuizZone setTestModeOn={setTestModeOn} />
                </RequireAuth>
              }
            />
            <Route
              path="/online-tests/acoustic-memory/"
              element={
                <RequireAuth>
                  <AcousticMemory />
                </RequireAuth>
              }
            />
            <Route
              path="/online-tests/number-pair-concentration/"
              element={
                <RequireAuth>
                  <NumberPairConcentrationPage />
                </RequireAuth>
              }
            />
            <Route
              path="/fluentair-blog"
              element={
                <RequireAuth>
                  <FluentAirBlog />
                </RequireAuth>
              }
            />
            <Route
              path="/support"
              element={
                <RequireAuth>
                  <Support />
                </RequireAuth>
              }
            />
            <Route
              path="/subscription"
              element={
                <RequireAuth>
                  <SubscriptionOptions />
                </RequireAuth>
              }
            />
            <Route
              path="/account"
              element={
                <RequireAuth>
                  <AccountSettings />
                </RequireAuth>
              }
            />
            {/* ADMIN-ONLY ROUTES */}
            <Route
              path="/questionbank-editor"
              element={
                <RequireAdmin>
                  <QuestionBankEditorPage />
                </RequireAdmin>
              }
            />
            <Route
              path="/testpage"
              element={
                <RequireAdmin>
                  <TestPage />
                </RequireAdmin>
              }
            />
            <Route
              path="/testpage/:contentId"
              element={
                <RequireAdmin>
                  <TestPage />
                </RequireAdmin>
              }
            />
            {/* CATCH-ALL 404 PAGE */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

function App() {
  const [testModeOn, setTestModeOn] = useState(false);

  return (
    <TopBarProvider>
      <Router>
        <AppContent testModeOn={testModeOn} setTestModeOn={setTestModeOn} />
      </Router>
    </TopBarProvider>
  );
}

export default App;
