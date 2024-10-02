import React from 'react';
import Divider from '@mui/material/Divider';

//import components nè
import PersonalInfoCard from './Info';
import CenteredTabs from './Tabs';


function AdminPage() {
  return (
    <div>
        <PersonalInfoCard/>
        <Divider sx={{margin: "50px 0", bgcolor: "#f26f33", height: "5px"}}></Divider>
        <CenteredTabs/>
        
    </div>
  );
}

export default AdminPage;
