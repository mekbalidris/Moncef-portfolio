import './App.css';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Background from './Background/Background';
import Project from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  const videos3D = [
    { type: "vimeo", url: "https://player.vimeo.com/video/1046118544" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046118564" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046118911" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046118349" },
  ];

  const videosmotion = [
    { type: "vimeo", url: "https://player.vimeo.com/video/1046119349" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046118255" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046120312" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046118255" },
  ];

  const videosediting = [
    { type: "vimeo", url: "https://player.vimeo.com/video/1046119237" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046120327" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046119237" },
    { type: "vimeo", url: "https://player.vimeo.com/video/1046120327" },
  ];

  const name = ["3D Projects", "motion graphics", "Video editing"];

  return (
    <>
      <Background />
      <div style={{ position: "relative", zIndex: 10 }}>
        <Nav />
      </div>
      <div className="flex flex-col">
        <Home />
        <div className="mt-60">
        <Project videos={videos3D} name={name[0]} />
        <Project videos={videosmotion} name={name[1]} />
        <Project videos={videosediting} name={name[2]} />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;