import { useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";

function LecturerProfile() {
  // Define state for isLoggedIn and setIsLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <DashboardLayout>
      <div>
        <h1>Lecturer Profile Page</h1>
        <p>View and update your profile details here.</p>
        <h1>Lecturer Profile</h1>
        <p>View and edit your profile here.</p>
      </div>
    </DashboardLayout>
  );
}

export default LecturerProfile;
