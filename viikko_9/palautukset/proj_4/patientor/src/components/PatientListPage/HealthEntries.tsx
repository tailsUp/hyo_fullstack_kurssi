import { BaseEntry } from "../../types";
import HealthEntry from "../Entry/HealthEntry";
import HospitalEntry from "../Entry/HospitalEntry";
import OccupationalEntry from "../Entry/OccupationalEntry";
import { tableStyle, tableRowStyle } from "../ComponentStyles/styles";

const HEADER: string = 'Entries:';

interface Props {
    entries: BaseEntry[];
}

const HealthEntries = ( { entries }: Props ) => {

    if(entries.length < 1) {
        return (
            <div>
                <br/>
                <b>{HEADER}</b>
                <div>
                    This client doesnt have a record in our system.
                </div>
            </div>
        );
    }



    const switchRenderEntries: React.FC<(BaseEntry)> = ( entry ) => {
        switch(entry.type) {
            case 'OccupationalHealthcare':
                return <OccupationalEntry entry={entry} />;
            case 'Hospital':
                return <HospitalEntry entry={entry}/>;
            default:
                return <HealthEntry entry={entry} />;
        }
    };

    return (
        <div>
            <br/>
            <b>{HEADER}</b>
            <div>
                <table style={tableStyle}>
                    <tbody>
                        {entries.map((a) => (
                            <tr key={a.id}>
                                <td style={tableRowStyle}>
                                    {switchRenderEntries(a)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
    );
};

export default HealthEntries;
