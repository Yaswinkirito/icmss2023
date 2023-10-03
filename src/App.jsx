
import "./App.css";
import Commitee from "./components/commitee";
import TrackChair from "./components/trackchair";
import OrganisingCommitee from "./components/organisingCommitee";

import Footer from "./components/footer";
import Navbar  from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar/>
     <Commitee/>
      <OrganisingCommitee />
      <TrackChair />
      <Footer />
    </div>
  );
}

export default App;
