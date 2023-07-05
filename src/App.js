/*
** React CORS friendly Single Page Application - https://github.com/aws-samples/react-cors-spa
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import logo from './logo.svg';
import logoS3 from './logoS3.png';
import logoCF from './logoCloudFront.png';
import './App.css';
import { useFetch } from "react-async"
import DataTable from "./components/DataTable"

const header = ['Project Name', 'Project Description', 'Location', 'Estimated Budget', 'Project Contact', 'Lead Status', 'Next Followup', 'Lead Owner']

const data = [['Route 59 expansion', 'Add new lanes on both sides', 'Porterville, IL', '100MM', 'City of Porterville', 'Complete', 'N/A', 'Kapil Gelati'],
    ['Bears Stadium', 'Build new stadium', 'Arlington Heights, IL', '400MM', 'Chicago Bears', 'Not Started', '09/01/2023', 'Kevin Kaiser'],
    ['Similac Canada', 'New Web Shop for Similac Canada', 'Abbot Park, IL', '1MM', 'Shona', 'Inception', '08/01/2023', 'Dimitri']]

// To be replaced by the endpoint of the API deployed through the CloudFormation Template
const APIEndPoint = 'to be replaced with your api endpoint here'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          {APIEndPoint.startsWith('http') &&
            <APIResult />
          }
        </header>

        <div>
            <DataTable header={header} data={data}/>
        </div>
    </div>
  );
}

const APIResult = () => {
  const { data, error } = useFetch(APIEndPoint, {
    headers: { accept: "application/json" },
  })
  if (error) return <p>{error.message}</p>
  if (data) return <p>{data.message}</p>
  return null
}

export default App;
