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
const Academy = lazy(() => import("./pages/Academy/Academy"));
const FluentAirBlog = lazy(() => import("./pages/FluentAirBlog/FluentAirBlog"));
const Support = lazy(() => import("./pages/Support/Support"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const SubscriptionOptions = lazy(() =>
  import("./pages/Subscription/SubscriptionOptions/SubscriptionOptions")
);
const TestPage = lazy(() => import("./pages/TestPage/TestPage"));
const QuestionBankEditorPage = lazy(() =>
  import("./pages/QuestionBankEditor/QuestionBankEditor")
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
                <Route path="/academy/:slug?" element={<Academy />} />
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
                <Route path="/academy" element={<Academy />} />
                <Route path="/fluentair-blog" element={<FluentAirBlog />} />
                <Route path="/support" element={<Support />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/subscription" element={<SubscriptionOptions />} />
                <Route path="/testpage" element={<TestPage />} />
                <Route path="*" element={<NotFoundPage />} />{" "}
                <Route
                  path="/questionbank-editor"
                  element={<QuestionBankEditorPage />}
                />
                {/* Catch-all route */}
              </Routes>
            </Suspense>
          </div>
        </div>
      </Router>
    </TopBarProvider>
  );
}

export default App;
