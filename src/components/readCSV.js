import Papa from "papaparse";

function ReadCSV(props) {
  return (
    <div>
      {/* File Uploader */}
      <label htmlFor="file">{props.type} </label>
      <input
        type="file"
        name="file"
        onChange= {function(e){
            // Passing file data (event.target.files[0]) to parse using Papa.parse
            Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
            const rowsArray = [];
            const valuesArray = [];
  
            // Iterating data to get column name and their values
            results.data.map((d) => {
                rowsArray.push(Object.keys(d));
                valuesArray.push(Object.values(d));
             });
             //Filtered Column_names & Values
             props.onChangeState(rowsArray[0], valuesArray);
            },
        });
        }}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
    </div>
  );
}

export default ReadCSV;
