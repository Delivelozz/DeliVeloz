import { useState } from "react";
import { CardUsageExample } from "../../../components/admin/card/Card.jsx";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";
import { ListUsageExample } from "../../../components/admin/List/List.jsx";
import { AreaChartUsageExample } from "../../../components/admin/area/Area.jsx";
import { Card } from "@tremor/react";
import ProductsAdmin from "../../../components/admin/ProductsAdmix.jsx";
import UsersAdmin from "../../../components/admin/UsersAdmin.jsx";
import NewsAdmin from "../../../components/admin/NewsAdmin.jsx";
import Sidenav from "../../../components/admin/sidenav/Sidenav.jsx";

export default function Dashboard() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  return (
    <div>
      <Sidenav />
      <section className="container">
        <h1 className="mb-6 font-base">Dashboard</h1>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-4 gap-6">
            <CardUsageExample />
            <CardUsageExample />
            <CardUsageExample />
            <CardUsageExample />
          </div>
          <div class="grid grid-cols-4 gap-6">
            <div class="col-span-3 h-auto">
              <Card>
                <AreaChartUsageExample />
              </Card>
            </div>

            <div class="col-span-1 h-auto">
              <ListUsageExample />
            </div>
          </div>

          <div>
            <ProductsAdmin />
          </div>
          <div>
            <UsersAdmin />
          </div>
          <div>
            <NewsAdmin />
          </div>
        </div>
      </section>
    </div>
  );
}

//
