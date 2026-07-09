import React, { useState } from "react";
import { Sun, Moon, Box, UsersRound, Info, Clock8, DollarSign, Search } from "lucide-react";

function App() {
  const [theme, settheme] = useState("White")
  function change() {
    if (theme === "White") {
      settheme("dark")
    } else {
      settheme("White")
    }
  }



  let cards = [
    {
      icon: <Box />,
      productName: "Total Products",
      number: "6"
    },
    {
      icon: <UsersRound />,
      productName: "Total Stock Qty",
      number: "267"
    },

    {
      icon: <Info />,
      productName: "Stock Alerts",
      number: "3",
      action: "Action Needed"
    },
    {
      icon: <Clock8 />,
      productName: "Unread Notifications",
      number: "0"
    },
    {
      icon: <DollarSign />,
      productName: "Total Sales",
      number: "$4,221.14"
    }

  ]



  return (
    <div className={theme}>
      <nav className='navbar'>
        <div className="search">
          <Search />
          <input type='text' placeholder='Search or type command...' /></div>

        <button className="chaklo" onClick={change}>
          {theme === "White" && <Moon />}
          {theme === "dark" && <Sun color="white" />}


        </button>
      </nav>

      <div className="container">
        <div className='bhawan'>
          <div>
            <h1>Welcome back, System Admin</h1>
            <p>Here is a summary of your operations today.</p>
          </div>
          <button className='new'>New Sales Order </button>
        </div>
        <div className="cards">
          {cards.map((item) => {
            return (
              <div className="card">
                <h1>{item.icon}</h1>
                <p>{item.productName}</p>
                <h1>{item.number}</h1>

                {item.action && <button className="action">{item.action}</button>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )


}
export default App;