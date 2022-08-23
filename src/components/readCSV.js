import Papa from "papaparse";

function ReadCSV(props) {
  
  return (
    <div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        // multiple
        onChange= {function(e){
            // Passing file data (event.target.files[0]) to parse using Papa.parse
            Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
            const valuesArray = [];
  
            // Iterating data to get column name and their values
            results.data.map((d) => {
                valuesArray.push(Object.values(d));
             });
             //Filtered Column_names & Values
             props.onChangeState(valuesArray);
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
