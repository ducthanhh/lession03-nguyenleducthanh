import logo from './logo.svg';
import './App.css';
import NLDT_Funcdemo from './compoment/NLDT_Func compoment';
import NLDT_classcomp from './compoment/NLDT_classcomp';

function App() {
  const users = {
    username :"k22cnt3",
    password:"123456aa",
    fistname:" nguyên lê",
    lastname:"đcuws thành"
  }
  // khai báo đối tượng hàm//
  function formatName(user){
    return <h2> xin chào,{user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
     {/* biểu thức jsx */} 
     <div>
      <p>FullName: {users.fistName} {users.lastName}</p>
        {formatName(users)}
     </div>
     { /*sử dụng fonction compoment*/} 
     <div>
      <NLDT_Funcdemo />
      {/*sử dụng fonc_comp có crops*/}
      <NLDT_Funcdemo userName="NLDT" fullName="nguyễn lê đức thành" age="20"/>
     </div>

      {/*sử dụng class copmpoment*/}
      <div>
        {/* dùng khong sử dụng props*/}
        <NLDT_classcomp/>
        {/*sử dụng props*/}
        <NLDT_classcomp company="Fit-NTU - k22cnt3" course="reactJs"/>
        <NLDT_classcomp company="Fit-NTU - k22cnt4" course="reactJs 1"/>
        <NLDT_classcomp company="Fit-NTU - k22cnt5" course="reactJs 2"/>
        <NLDT_classcomp company="Fit-NTU - k22cnt6" course="reactJs 3"/>
      </div>
    </div>
  );
}

export default App;
