import { InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Diagnosis } from "../../types";

interface Props {
    type:           string;
    diag:           Diagnosis[];
    specialist:     string;
    description:    string;
    code:           string;
    _date:          string;
    diagnosisCodes: string[];
    dateDischarge:  string;
    criteria:       string;
    employer:       string;
    dateEnd:        string;
    dateStart:      string;
    rating:         string;
    hide:           boolean;

    setHide:            React.Dispatch<React.SetStateAction<boolean>>;
    setRating:          React.Dispatch<React.SetStateAction<string>>;
    setEmployer:        React.Dispatch<React.SetStateAction<string>>;
    setDateEnd:         React.Dispatch<React.SetStateAction<string>>;
    setDateStart:       React.Dispatch<React.SetStateAction<string>>;
    setDateDischarge:   React.Dispatch<React.SetStateAction<string>>;
    setCriteria:        React.Dispatch<React.SetStateAction<string>>;
    setDiagnosisCodes:  React.Dispatch<React.SetStateAction<string[]>>;
    setUserDate:        React.Dispatch<React.SetStateAction<string>>;
    setSpecialist:      React.Dispatch<React.SetStateAction<string>>;
    setDescription:     React.Dispatch<React.SetStateAction<string>>;
    setCode:            React.Dispatch<React.SetStateAction<string>>;
}

interface PropsBasic {
    specialist:     string;
    description:    string;
    code:           string;
    _date:          string;
    setUserDate:    React.Dispatch<React.SetStateAction<string>>;
    setSpecialist:  React.Dispatch<React.SetStateAction<string>>;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    setCode:        React.Dispatch<React.SetStateAction<string>>;
}

interface PropsHospital {
    diag:               Diagnosis[];
    diagnosisCodes:     string[];
    dateDischarge:      string;
    criteria:           string;
    setDateDischarge:   React.Dispatch<React.SetStateAction<string>>;
    setCriteria:        React.Dispatch<React.SetStateAction<string>>;
    setDiagnosisCodes:  React.Dispatch<React.SetStateAction<string[]>>;
}

interface PropsOccupational {
    diag:           Diagnosis[];
    diagnosisCodes: string[];
    employer:       string;
    dateEnd:        string;
    dateStart:      string;

    setEmployer:        React.Dispatch<React.SetStateAction<string>>;
    setDateEnd:         React.Dispatch<React.SetStateAction<string>>;
    setDateStart:       React.Dispatch<React.SetStateAction<string>>;
    setDiagnosisCodes:  React.Dispatch<React.SetStateAction<string[]>>;
}

interface PropsHealthCheck {
    rating:    string;
    setRating: React.Dispatch<React.SetStateAction<string>>;
}

const BasicOptions = ( {specialist, description, _date, setSpecialist, setDescription, setUserDate }: PropsBasic ) => {
    return (
        <div>
            <TextField autoComplete='off' label="Specialist" fullWidth value={specialist} onChange={({ target }) => setSpecialist(target.value)} />
            <TextField autoComplete='off' label="Date" fullWidth value={_date} onChange={({ target }) => setUserDate(target.value)} />
            <TextField autoComplete='off' label="Description" fullWidth value={description} onChange={({ target }) => setDescription(target.value)} />
        </div>
    );
};

const HealthCheck = ( {rating, setRating }: PropsHealthCheck ) => {

    return (
        <TextField autoComplete='off' label="Rating (0-3)" fullWidth value={rating} onChange={({ target }) => setRating(target.value)} />
    );
};

const HospitalOptions = ( { diag, dateDischarge, setDateDischarge, criteria, setCriteria, diagnosisCodes, setDiagnosisCodes }: PropsHospital ) => {

    const handleMultipleSelection = (event: SelectChangeEvent<typeof diagnosisCodes>) => {
        const { target: { value },} = event;
        setDiagnosisCodes(typeof value === 'string' ? value.split(',') : value,);
    };
    
    return (
        <div>
            <InputLabel style={{ marginTop: 20 }}>Diagnosis code(s)</InputLabel>
            <Select fullWidth label="Select diagnosis" multiple value={diagnosisCodes} onChange={handleMultipleSelection}
                input={<OutlinedInput label="Name" />}> {diag.map((d) => (
                <MenuItem key={d.code} value={d.code}>{d.code}</MenuItem>
                ))}
            </Select>
            <TextField autoComplete='off' label="Discharge date" fullWidth value={dateDischarge} onChange={({ target }) => setDateDischarge(target.value)} /> 
            <TextField autoComplete='off' label="Discharge criteria" fullWidth value={criteria} onChange={({ target }) => setCriteria(target.value)} />
        </div>
    );
};
const OccupationalOptions = ( { diag, employer, dateStart, dateEnd, setEmployer, setDateStart, setDateEnd, diagnosisCodes, setDiagnosisCodes }: PropsOccupational ) => {

    const handleMultipleSelection = (event: SelectChangeEvent<typeof diagnosisCodes>) => {
        const { target: { value },} = event;
        setDiagnosisCodes(typeof value === 'string' ? value.split(',') : value,);
    };
    
    return (
        <div>
            <InputLabel style={{ marginTop: 20 }}>Diagnosis code(s)</InputLabel>
            <Select fullWidth label="Select diagnosis" multiple value={diagnosisCodes} onChange={handleMultipleSelection}
                input={<OutlinedInput label="Name" />}> {diag.map((d) => (
                <MenuItem key={d.code} value={d.code}>{d.code}</MenuItem>
                ))}
            </Select>
            <TextField autoComplete='off' label="Employer" fullWidth value={employer} onChange={({ target }) => setEmployer(target.value)} />
            <TextField autoComplete='off' label="Sickleave starts" fullWidth value={dateStart} onChange={({ target }) => setDateStart(target.value)} /> 
            <TextField autoComplete='off' label="Sickleave ends" fullWidth value={dateEnd} onChange={({ target }) => setDateEnd(target.value)} />
        </div>
    );
};

const EntryOptions = ( { diag, type, specialist, description, code, _date, dateDischarge, criteria, diagnosisCodes,
    employer, dateStart, dateEnd, rating,
    setUserDate, setSpecialist, setDescription, setCode, setDateDischarge, setCriteria, setDiagnosisCodes,
    setEmployer, setDateStart, setDateEnd, setRating }: Props) => {
    
    if(type === 'Hospital')
    {
        return (
            <div>
                <BasicOptions description={description} setDescription={setDescription} 
                    code={code} setCode={setCode} specialist={specialist} setSpecialist={setSpecialist} _date={_date} setUserDate={setUserDate}/>
                <HospitalOptions dateDischarge={dateDischarge} setDateDischarge={setDateDischarge} criteria={criteria} 
                    setCriteria={setCriteria} diagnosisCodes={diagnosisCodes} setDiagnosisCodes={setDiagnosisCodes} diag={diag}/>
            </div>
        );
    }
    else if(type === 'HealthCheck') 
    {
        return (
            <div>
                <BasicOptions description={description} setDescription={setDescription} 
                    code={code} setCode={setCode} specialist={specialist} setSpecialist={setSpecialist} _date={_date} setUserDate={setUserDate}/>
                    <HealthCheck rating={rating} setRating={setRating}/> 
            </div>
        );
    }
    else if(type === 'OccupationalHealthcare')
    {
        return (
            <div>
                <BasicOptions description={description} setDescription={setDescription} 
                    code={code} setCode={setCode} specialist={specialist} setSpecialist={setSpecialist} _date={_date} setUserDate={setUserDate}/>
                <OccupationalOptions dateStart={dateStart} setDateStart={setDateStart} dateEnd={dateEnd} setDateEnd={setDateEnd} employer={employer} 
                    setEmployer={setEmployer} diagnosisCodes={diagnosisCodes} setDiagnosisCodes={setDiagnosisCodes} diag={diag}/>
            </div>
        );
    } else
    {
        return null;
    }
};

export default EntryOptions;
