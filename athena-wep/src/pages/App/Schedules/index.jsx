import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import Breadcrumbs from "../../../components/Breadcrumbs";
import Input from "../../../components/Input";

import { api } from "../../../services/api";

import Schedule from "./Schedule";

import "./styles.css";

function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [isSchedulesLoading, setIsSchedulesLoading] = useState(false);

  async function getSchedules() {
    try {
      setIsSchedulesLoading(true);

      const { data } = await api.get("/schedules");

      setSchedules(data);
    } catch (error) {
      toast.error("Não foi possível carregar os professores. Tente novamente!");
    } finally {
      setIsSchedulesLoading(false);
    }
  }

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <section className="dashboard-container">
      <div className="dashboard-header">
        <Breadcrumbs
          options={[{ label: "Início", path: "/schedules", activeLink: false }]}
        />

        <Link to="/new-schedule" className="link-new-schedule">
          Criar
          <Plus size={20} />
        </Link>
      </div>

      <div className="dashboard-content">
        <Input placeholder="Buscar por um agendamento" />

        <div className="schedules-list">
          {isSchedulesLoading && !schedules.length > 0 && <p>Carregando...</p>}
          {schedules.length > 0 && <Schedule schedules={schedules} />}
        </div>
      </div>
    </section>
  );
}

export default Schedules;
