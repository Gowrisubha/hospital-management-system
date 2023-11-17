import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.css'

function DepartmentDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle style={{ border: 'none', background: 'none' }}>
      <div class="flex flex-row pl-5 items-center">
      <div class="h-9 w-9 bg-pink-500 border-solid border-4 border-black-600 rounded-xl"></div>

                <div class="flex flex-col pl-5">
                    <span class="font-semibold text-sm app-color-black">Find Hospital</span>
                    <span class="font-semibold text-xs app-color-gray-1">Health care</span>
                </div>
                <svg class="w-4 h-4 app-color-blue-3 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                <div class="w-px bg-gray-100 h-10 ml-5"></div>
            </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cardiology</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Dermatology</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Orthopedics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DepartmentDropdown;
