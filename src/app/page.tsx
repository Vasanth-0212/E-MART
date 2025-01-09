import Topbar from "./pages/topbar";
import Offer from "./pages/offers";
import Items from "./pages/items";



export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="mt-[60px]"><Offer /></div>
      <div className="mt-[60px]"><Items /></div>
    </div>
  );
}
