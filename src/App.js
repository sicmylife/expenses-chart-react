import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import logo from "./images/logo.svg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 5,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };

  return (
    <>
      <div className="container  ">
        <article className="soft-red ">
          <h2>
            <span>My balance</span>
            $921.48
          </h2>
          <img src={logo} alt="" srcset="" />
        </article>

        <article className="second">
          <article >
            <h1>Spending - last 7 days</h1>
            <Bar data={state} />
          </article>

          <article className="third">
            <h2>
              <span>Total this month</span>
              $478.33
            </h2>
            <h3>
              <span>+2.4%</span>
              from last month
            </h3>
          </article>
        </article>
      </div>
    </>
  );
}

export default App;
