interface ShowErrorProps {
    showError: string;
}

const ShowError = (_props: ShowErrorProps) => {

    if(_props.showError === undefined || _props.showError === '') {
        return null;
    }

    const bold = { fontWeight: 'bold', color: 'red' };
    //const normal = { fontWeight: 'normal' };

    return (
        <div>
            <div>
                <label>There was an error while trying to add your new entry.</label>
            </div>
            <div>
                <label style={bold}>{_props.showError}</label>
            </div>
        </div>
    )
};

export default ShowError;