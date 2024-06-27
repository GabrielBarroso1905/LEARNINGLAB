import Breadcrumbs from "../../../components/Breadcrumbs";
import Field from "../../../components/Field";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";

import "./styles.css";

function EditSchedule() {
  return (
    <div className="edit-schedule-container">
      <Breadcrumbs
        options={[
          { label: "Início", path: "/schedules", activeLink: false },
          { label: "Editar", path: "/edit-schedule/1234", activeLink: true },
        ]}
      />

      <form className="form-container">
        <Field>
          <label htmlFor="subject">Assunto</label>

          <Input placeholder="TCC" id="subject" />
        </Field>

        <Field>
          <label htmlFor="teacher">Professor</label>

          <Select options={[{ label: "Marcos", value: "1" }]} id="teacher" />
        </Field>
        
        <Field>
          <label htmlFor="description">Descrição</label>

          <Textarea placeholder="Discutir tema do TCC..." id="description" />
        </Field>

        <div className="field-group">
          <Field>
            <label htmlFor="date">Data</label>

            <Input id="date" defaultValue="2024-06-24" />
          </Field>

          <Field>
            <label htmlFor="time">Horário</label>

            <Input type="time" id="time" defaultValue="20:30" />
          </Field>
        </div>

        <small>Todos os campos são obrigatórios.</small>

        <div className="button-group">
          <Button type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditSchedule;
