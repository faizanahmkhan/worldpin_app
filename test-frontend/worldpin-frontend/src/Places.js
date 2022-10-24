
import { useState } from "react";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
} from "@reach/combobox";

const PlacesAutocomplete = ({setSelected}) => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();


    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({lat, lng});

    }



  
    return (
    <Combobox onSelect={handleSelect}>
  
      <ComboboxInput 
      value={value} 
      onChange= {(event) => setValue(event.target.value)}
      disabled={!ready}
      className="combobox-input"
      placeholder="Search a location"
      />
      
      <ComboboxPopover>
        <ComboboxList>
        {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>

      </ComboboxPopover>
  
    </Combobox>
  
    )
  
}

export default PlacesAutocomplete