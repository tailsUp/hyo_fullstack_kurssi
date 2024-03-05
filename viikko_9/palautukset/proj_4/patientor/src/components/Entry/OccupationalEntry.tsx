import { BaseEntry } from "../../types";
import { entryCase } from "../Icons/icons";
import DiagnoseCodes from "../PatientListPage/DiagnoseCodes";

interface Props {
    entry: BaseEntry;
}

const OccupationalEntry = ( { entry }: Props) => {
    return (
        <div>
            <div id="dateDIV">
                {entry.date} {entryCase(0)} {entry.employerName}
            </div>
            <div id="descriptionDIV">
                <i>{entry.description}</i>
            </div>
            <div id="logoDIV">
                {entry.healthCheckRating}
            </div>
            <DiagnoseCodes codes={entry.diagnosisCodes}/>
            <div id="specialistDIV">
                <label>diagnosed by: {entry.specialist}</label>
            </div>
        </div>
    );
};

export default OccupationalEntry;