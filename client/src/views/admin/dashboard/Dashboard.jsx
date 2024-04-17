import Sidenav from "../../../components/admin/sidenav/Sidenav";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function Dashboard() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();
  return (
    <div>
      <Sidenav />
      <section className="container">
        <h1>Dashboard</h1>
        <div>
          <div>
            <Bar
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [200, 300, 400],
                  },
                  {
                    label: "Loss",
                    data: [90, 80, 70],
                  },
                ],
              }}
            />
          </div>
          <div>
            <Doughnut
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [200, 300, 400],
                  },
                  {
                    label: "Loss",
                    data: [90, 80, 70],
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
