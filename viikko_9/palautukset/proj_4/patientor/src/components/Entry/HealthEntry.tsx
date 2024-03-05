import { BaseEntry } from "../../types";
import { coloredHeart, entryCase } from '../Icons/icons';

interface Props {
    entry: BaseEntry;
}

const HealthEntry = ( { entry }: Props ) => {
    return (
        <div>
            <div id="dateDIV">
                {entry.date} {entryCase(1)} {entry.employerName}
            </div>
            <div id="descriptionDIV">
                <i>{entry.description}</i>
            </div>
            <div id="logoDIV">
                {coloredHeart(entry.healthCheckRating)}
            </div>
            <div id="specialistDIV">
            <label>diagnosed by: {entry.specialist}</label>
            </div>
        </div>
    );
};

export default HealthEntry;