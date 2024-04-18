import Sidenav from "../../../components/admin/sidenav/Sidenav";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Doughnut, Line, Bubble, Pie } from "react-chartjs-2";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";
import {
  monthlyTop,
  monthlySales,
  monthlyMoreLess,
} from "../../../data/chartsData.js";

export default function Dashboard() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const days = monthlySales[0].map((day) => day.day);

  const amounts = monthlySales[0].map((amount) => amount.amount);

  const firstThree = monthlyMoreLess
    .slice(0, 3)
    .map((item) => item.salesAmount);

  const lastThree = monthlyMoreLess.slice(3, 6).map((item) => item.salesAmount);

  const firstThreeNames = monthlyMoreLess.slice(0, 3).map((item) => item.name);

  const lastThreeNames = monthlyMoreLess.slice(3, 6).map((item) => item.name);

  const namesTop = monthlyTop.map((element) => element.name);

  const salesAmountTop = monthlyTop.map((element) => element.salesAmount);

  return (
    <div>
      <Sidenav />
      <section className="container">
        <h1 className="mb-16">Dashboard</h1>
        <div className="flex flex-wrap gap-8 justify-between lg:gap-20">
          <div className="w-full flex flex-col gap-8 sm:flex-row">
            <div className=" w-full flex justify-center sm:w-1/2">
              <div className="w-full max-h-80">
                <p className="text-sundown-400 font-bold  text-lg">
                  Mas y menos vendidos por mes
                </p>
                <Bar
                  data={{
                    labels: ["Enero", "Febrero", "Marzo"],
                    datasets: [
                      {
                        label: "Mas vendidos",
                        data: firstThree,
                      },
                      {
                        label: "Menos vendidos",
                        data: lastThree,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            const names = [firstThreeNames, lastThreeNames];
                            return names[context.datasetIndex][
                              context.dataIndex
                            ];
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className=" w-full flex justify-start sm:justify-end sm:w-1/2">
              <div className=" w-1/2 max-h-64">
                <p className="text-sundown-400 font-bold text-lg ">
                  Top 3 del mes
                </p>
                <Pie
                  data={{
                    labels: namesTop,
                    datasets: [
                      {
                        label: "Venta",
                        data: salesAmountTop,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full ">
            <p className="text-sundown-400  font-bold text-xl">
              Ventas diarias mensuales
            </p>
            <Bar
              data={{
                labels: days,
                datasets: [
                  {
                    label: "Ventas diarias",
                    data: amounts,
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
