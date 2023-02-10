import { Link } from "react-router-dom";

function App() {
   return (
      <div className="flex h-screen flex-col justify-center items-center">
         <button className="primary-button w-52 mb-2">
            <Link to="/check-out">صفحه پرداخت هزینه</Link>
         </button>
         <button className="primary-button w-52">
            <Link to="/repairman/refrigrator">صفحه تعمیرکار یخچال فریزر</Link>
         </button>
      </div>
   );
}

export default App;
