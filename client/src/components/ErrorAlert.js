//Presentational component displayed when errors occur in API calls.

import React from 'react'
import {Alert} from 'reactstrap'

const ErrorAlert = (props) => <div>
    <Alert color="warning">
        Something has gone wrong! Terribly sorry!
    </Alert>
</div>

export default ErrorAlert