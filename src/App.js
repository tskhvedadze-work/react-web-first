import { Header } from "./sections/Header";
import { Blogs } from "./sections/Blogs";
import { Feedback } from "./sections/Feedback";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Review } from "./sections/Review";

function App() {
  return (
    <div className="App">
      <Header />
      <Review />
      <Blogs />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
