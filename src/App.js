import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { TopBarProvider } from "./components/topbar/TopBarContext";
import TopBar from "./components/topbar/TopBar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"; // Add this component
import Loader from "./components/Loader/Loader";
import "./App.css";
import "./styles/dark.css";
import "./styles/light.css";

// Lazy load components for better performance
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

function App() {
  const [testModeOn, setTestModeOn] = useState(false);

  return (
    <TopBarProvider>
      <Router>
        <div>
          {!testModeOn && <Navbar />}
          <TopBar testModeOn={testModeOn} />
          <div className="main-content">
            <Suspense fallback={<Loader />}>
              <Routes>
                {/* ACCESS ONLY FOR EVERY ROLE*/}
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/practice"
                  element={<QuizZone setTestModeOn={setTestModeOn} />}
                />
                <Route
                  path="/online-tests/acoustic-memory/"
                  element={<AcousticMemory />}
                />
                <Route
                  path="/online-tests/number-pair-concentration/"
                  element={<NumberPairConcentrationPage />}
                />
                <Route path="/fluentair-blog" element={<FluentAirBlog />} />
                <Route path="/support" element={<Support />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/subscription" element={<SubscriptionOptions />} />
                <Route path="*" element={<NotFoundPage />} />{" "}
                <Route path="/account" element={<AccountSettings />} />
                {/* ACCESS ONLY FOR ADMIN ROLE */}
                <Route
                  path="/questionbank-editor"
                  element={<QuestionBankEditorPage />}
                />
                <Route path="/testpage" element={<TestPage />} />
                <Route path="/testpage/:contentId" element={<TestPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </Router>
    </TopBarProvider>
  );
}

export default App;
