import Select from "react-select";

const SearchBar = ({ guildOptions, setFiltered, response }) => {

    const handleChange = (values) => {
        var filteredEvents = [];
        var applied = [];
        for (let i in values) {
            filteredEvents = response.filter(
                (value) => value.guild === values[i].value
            );
            applied = [...applied, ...filteredEvents];
        }
        setFiltered(applied);
    };

    return (
        <Select
            menuPlacement="auto"
            isMulti
            name="colors"
            options={guildOptions}
            onChange={handleChange}
        />
    );
}

export { SearchBar }
