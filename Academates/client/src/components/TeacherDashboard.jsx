import React from 'react';
import './TeacherDashboard.css';
import teacherIcon from '../assets/image/teacher.webp';
import { MdMessage, MdCall, MdMoreVert, MdNotifications, MdChat, MdSearch,MdDashboard, MdSchedule, MdGrade, MdPeople, MdNote,MdSettings, MdExitToApp} from 'react-icons/md';


const sidebarOptions = [
  { name: 'Teacher Overview', icon: <MdDashboard />, path: '/teacher-overview' },
  { name: 'Class Schedule', icon: <MdSchedule />, path: '/class-schedule' },
  { name: 'Grades', icon: <MdGrade />, path: '/grades' },
  { name: 'Other Teachers', icon: <MdPeople />, path: '/other-teachers' },
  { name: 'Teacher\'s Notes', icon: <MdNote />, path: '/teachers-notes' },
];

// Here's the dummy data for teachers
const teachersData = [
  {
    id: 't1',
    name: 'John Doe',
    subjects: ['Science', 'Chemistry'],
    imageUrl: teacherIcon ,
  },
  {
    id: 't2',
    name: 'Jane Smith',
    subjects: ['Art', 'History'],
    imageUrl: teacherIcon ,
  },
  {
    id: 't3',
    name: 'Mark Johnson',
    subjects: ['Mathematics', 'Physics'],
    imageUrl: teacherIcon ,
  },
  {
    id: 't4',
    name: 'Emily Davis',
    subjects: ['English Literature', 'French'],
    imageUrl: teacherIcon ,
  },
  {
    id: 't5',
    name: 'Sachin Singh',
    subjects: ['Nepali', 'Sanskrit'],
    imageUrl: teacherIcon ,
  },
  // ... add more teachers as needed
];





const TeacherDashboard = () => {
  return (
    <div className="dashboard">
    <aside className="sidebar">
      <div className="sidebarTop">
        {sidebarOptions.map(option => (
          <div key={option.name} className="sidebarOption">
            {option.icon}
            <span className="optionText">{option.name}</span>
          </div>
        ))}
      </div>
      <div className="sidebarBottom">
        <div className="sidebarOption">
          <MdSettings />
          <span className="optionText">Settings</span>
        </div>
        <div className="sidebarOption">
          <MdExitToApp />
          <span className="optionText">Logout</span>
        </div>
      </div>
    </aside>
      <div className="content">
        <header className="header">
          <h1>Teachers</h1>
          <div className="headerRight">
            <MdSearch className="icon" />
            <input type="text" placeholder="Search..." className="searchInput" />
            <MdNotifications className="icon" />
            <MdChat className="icon" />
          </div>
        </header>
        <main className="mainContent">
          <section className="cardContainer">
            {teachersData.map(teacher => (
              <div key={teacher.id} className="card">
                <img className="cardImage" src={teacher.imageUrl} alt={teacher.name} />
                <div className="cardContent">
                  <h2 className="cardTitle">{teacher.name}</h2>
                  <p className="cardSubtitle">{teacher.subjects.join(', ')}</p>
                </div>
                <div className="cardActions">
                  <button className="iconButton"><MdMessage /></button>
                  <button className="iconButton"><MdCall /></button>
                  <button className="iconButton"><MdMoreVert /></button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;