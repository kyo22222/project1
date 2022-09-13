import React  from 'react';
import { Outlet, NavLink } from "react-router-dom";

function Menu(props) {
  return (
	<div className={'side0 ' + props.className}>
			<div class="svg_contain">
			<svg x="0px" y="0px" viewBox="0 0 222.2 212.7">
			<g>
		<path class="st0" d="M122.3,45.5c1.4-1.6,2.8-3.2,4.3-4.7c11.6-11.6,23.1-23.2,34.7-34.7c7.2-7.2,18.2-7.3,25.4-0.2
		c2,2,3.5,4.7,5.3,7.2c1.4-0.4,3.3-1,5.1-1.3c11.7-2,22.4,6.5,23.1,18.4v1.8v60.4c0,8.5-5,14.9-12.9,16.6
		c-9.3,1.9-18.6-5.2-18.8-14.7c-0.2-10-0.1-19.9-0.1-30V24.6v-3.1c-0.9,0.8-1.5,1.2-1.9,1.7C175.5,34.2,164.8,45,154,55.8
		c-7.8,7.9-19.1,7.9-27,0c-1.5-1.5-3-3.1-4.8-5c-1.4,1.5-2.6,3-4,4.3c-2.8,2.8-6,5-10,5.8c-6,1.2-11.2-0.6-15.5-4.6
		c-5.5-5.1-10.7-10.5-16-15.7c-5.9-5.9-11.7-11.8-17.6-17.6c-3.4-3.4-7.3-5.4-11.9-6.3c-1.4-0.3-2,0.1-2.5,1.4
		c-3.5,8.5-1.6,18.2,5,24.8c12.7,12.8,25.5,25.6,38.4,38.5l15.5,15.5c7.7,7.7,10.2,19.5,6,29.5c-4.4,10.4-14.1,16.8-25.4,16.5
		c-1.5,0-2.5,0.4-3.5,1.5c-10,11.4-27.4,12.5-38.4,2c-10.9-10.5-21.4-21.4-32.1-32c-2-2-4.1-4.1-6.1-6.1c-5.6-5.8-5.6-14.8,0-20.3
		c5.6-5.6,14.5-5.7,20.3-0.1c8.9,8.8,17.6,17.6,26.5,26.5c5.9,5.9,11.7,11.8,17.6,17.6c2.8,2.8,6.1,4.9,9.9,6c1.4,0.4,2,0,2.6-1.2
		c4.3-8.9,2.5-19.2-4.7-26.5C65.3,99.1,54.2,88,43.1,76.8C36.9,70.5,30.4,64.4,24.3,58C9.4,43.1,15.9,18.9,36,13.3
		c1.7-0.5,3.7-0.5,5.5-0.9c0.8-0.2,1.8-0.6,2.3-1.2c10.3-13.6,29-15,41.1-2.9C96.9,20.1,108.8,32,120.7,44
		C121.1,44.4,121.5,44.8,122.3,45.5 M84.7,139h1.6c12.8-1,23.2-12.8,20.6-27.2c-1-5.4-4-9.6-7.7-13.3c-17.4-17.3-34.7-34.7-52-52.1
		c-6.1-6.2-9-13.5-8.1-22.3c0.2-2.4,0.9-4.9,1.4-7.3c-1.9-0.3-5.5,0.7-8.4,2.3c-13.5,7.5-16,25.4-4.9,36.6
		C44.4,73.1,61.7,90.4,79,107.8c5.8,5.8,8.5,12.9,7.8,21.2C86.5,132.2,85.5,135.4,84.7,139 M192.2,56.8L192.2,56.8v36.8
		c0,7.6,7.5,13.2,14.9,11.3c5.6-1.4,9.1-6.1,9.1-12.2V45.1c0-4.8,0.1-9.5-0.1-14.2c-0.4-11.3-11.9-18.6-22-14
		c-1.4,0.6-1.9,1.4-1.9,3.1C192.3,32.2,192.2,44.5,192.2,56.8 M77.4,142.4c-0.9-0.5-1.1-0.6-1.4-0.7c-4.9-1.6-8.8-4.7-12.3-8.3
		c-13.9-14-27.9-28.1-41.9-42c-4.5-4.5-10.8-4.7-15-0.5c-4.3,4.2-4.2,10.6,0.2,15c12.4,12.5,24.7,24.9,37.2,37.3
		c8.5,8.4,21.5,8.9,30.7,1.2C75.6,143.7,76.3,143.2,77.4,142.4 M47.7,12.8c6.9,1.3,11.9,5.1,16.4,9.7c9.5,9.8,19.1,19.3,28.8,28.9
		c1.7,1.7,3.9,3.3,6,4.6c3.5,2,7.2,2,10.9,0.3c3.8-1.7,6.3-4.9,9.2-7.8c-0.3-0.4-0.5-0.7-0.7-0.9c-12.3-12.5-24.6-25-37.1-37.3
		c-8.9-8.6-23.3-8-31.8,0.8C48.8,11.5,48.5,12,47.7,12.8 M124.6,48.4c1.7,1.5,3.2,2.6,4.3,4c6.4,7.2,16.2,6.9,22.8,0.1
		c11.6-12,23.6-23.7,35.3-35.6c0.4-0.4,0.7-1.5,0.5-2.1c-2.3-7.6-10.7-11.8-18.1-9c-2,0.8-4.1,2.2-5.6,3.8
		c-9.8,9.7-19.5,19.4-29.2,29.2C131.4,41.8,128.1,44.9,124.6,48.4"/>
		<path class="st0" d="M204,152c-9.5,0-16.9-7.6-16.9-17.1c0-9.5,7.5-17,16.9-17.1c9.6,0,17.1,7.6,17.1,17.3
		C221.1,144.4,213.5,152,204,152 M204.2,121.9c-7.1,0-13,5.7-13,12.8c0,7.2,5.8,13.2,12.9,13.2c7.1,0,13.1-6,13.1-13.1
		C217.3,127.8,211.4,122,204.2,121.9"/>
		<path class="st0" d="M17.5,184.9c-1,0-2-0.1-2.9-0.4c-0.9-0.2-1.7-0.5-2.3-0.9c-0.6-0.4-1.1-0.7-1.5-1c-0.4-0.3-0.7-0.6-0.9-0.9
		l1.9-2c1.6,1.6,3.5,2.4,5.7,2.4c1.3,0,2.2-0.2,2.8-0.6c0.6-0.4,0.9-1,0.9-1.6c0-0.2,0-0.4-0.1-0.5s-0.1-0.3-0.2-0.4
		c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.2-0.4-0.3s-0.3-0.2-0.4-0.2c-0.1,0-0.2-0.1-0.5-0.2s-0.4-0.1-0.5-0.2
		c-0.1,0-0.3-0.1-0.5-0.1c-0.3-0.1-0.4-0.1-0.5-0.1c-0.3-0.1-0.8-0.2-1.4-0.4c-0.6-0.1-1.2-0.3-1.6-0.4c-0.5-0.1-0.9-0.3-1.4-0.5
		c-1.9-0.8-2.9-2.1-2.9-3.9c0-1,0.3-1.8,1-2.6c0.6-0.7,1.5-1.3,2.4-1.6s2-0.5,3.1-0.5c1.3,0,2.5,0.2,3.7,0.6c1.2,0.4,2.2,1,3,1.7
		l-1.4,2.2c-1.6-1.2-3.3-1.8-5.2-1.8c-1,0-1.9,0.2-2.6,0.5c-0.7,0.3-1,0.8-1,1.5c0,0.6,0.3,1,0.8,1.4s1.5,0.7,2.9,1
		c2,0.4,3.5,0.9,4.3,1.4c1.7,0.9,2.5,2.2,2.5,4c0,0.8-0.2,1.6-0.6,2.3s-0.9,1.2-1.6,1.6c-0.7,0.4-1.4,0.7-2.1,0.9
		C19,184.8,18.3,184.9,17.5,184.9"/>
		<polygon class="st0" points="41.3,167.8 44.1,167.8 44.1,184.6 41.2,184.6 41.2,172.9 35.8,180.3 30.4,172.8 30.4,184.6 
		27.5,184.6 27.5,167.8 30.2,167.8 35.8,175.6 	"/>
		<polygon class="st0" points="10.9,212.7 10.9,195.9 23.6,195.9 23.6,198.6 13.8,198.6 13.8,202.5 21,202.5 21,205.2 13.8,205.2 
		13.8,210 23.7,210 23.7,212.7 	"/>
		<polygon class="st0" points="27.2,212.7 27.2,195.9 29.9,195.9 38.9,207.7 39,195.9 41.8,195.9 41.8,212.7 39.2,212.7 30.1,200.9 
		30.1,212.7 	"/>
		<polygon class="st0" points="50.3,212.7 50.3,198.6 45,198.6 45,195.9 58.5,195.9 58.5,198.6 53.2,198.6 53.2,212.7 	"/>
		<polygon class="st0" points="61.7,212.7 61.7,195.9 74.3,195.9 74.3,198.6 64.6,198.6 64.6,202.5 71.8,202.5 71.8,205.2 
		64.6,205.2 64.6,210 74.5,210 74.5,212.7 	"/>
		<path class="st0" d="M78,212.7v-16.8h8.6c0.9,0,1.6,0.2,2.3,0.5c0.7,0.3,1.2,0.7,1.5,1.2c0.3,0.5,0.6,1,0.8,1.6
		c0.2,0.6,0.3,1.1,0.3,1.8c0,1.1-0.3,2.1-0.8,3c-0.5,0.9-1.4,1.5-2.5,1.8l4.2,6.9H89l-3.9-6.7h-4.2v6.7H78z M80.9,203.3h5.4
		c0.7,0,1.2-0.2,1.6-0.6c0.4-0.4,0.6-1,0.6-1.7c0-0.7-0.2-1.2-0.5-1.7c-0.4-0.4-0.9-0.6-1.5-0.6h-5.5V203.3z"/>
		<polygon class="st0" points="98.6,212.7 98.6,198.6 93.3,198.6 93.3,195.9 106.8,195.9 106.8,198.6 101.6,198.6 101.6,212.7 	"/>
		<path class="st0" d="M106.4,212.7l7.8-16.9h2.6l7.8,16.9h-3.1l-1.8-3.9h-8.5l-1.8,3.9H106.4z M112.4,206.1h6.1l-3-6.6L112.4,206.1z
		"/>
		<rect x="127.2" y="195.9" class="st0" width="2.9" height="16.8"/>
		<polygon class="st0" points="134.7,212.7 134.7,195.9 137.4,195.9 146.4,207.7 146.4,195.9 149.3,195.9 149.3,212.7 146.7,212.7 
		137.6,200.9 137.6,212.7 	"/>
		<polygon class="st0" points="167.5,195.9 170.2,195.9 170.2,212.7 167.3,212.7 167.3,201 161.9,208.4 156.6,200.9 156.6,212.7 
		153.7,212.7 153.7,195.9 156.4,195.9 161.9,203.7 	"/>
		<polygon class="st0" points="174.6,212.7 174.6,195.9 187.3,195.9 187.3,198.6 177.5,198.6 177.5,202.5 184.7,202.5 184.7,205.2 
		177.5,205.2 177.5,210 187.4,210 187.4,212.7 	"/>
		<polygon class="st0" points="190.9,212.7 190.9,195.9 193.6,195.9 202.6,207.7 202.7,195.9 205.6,195.9 205.6,212.7 202.9,212.7 
		193.8,200.9 193.8,212.7 	"/>
		<polygon class="st0" points="214,212.7 214,198.6 208.7,198.6 208.7,195.9 222.2,195.9 222.2,198.6 217,198.6 217,212.7 	"/>
		</g>
			</svg>
			</div>

			<ul className='menuu'>
              <li>
                <NavLink to="">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Karina">Karina</NavLink>
              </li>
              <li>
                <NavLink to="/Car">Car</NavLink>
              </li>
            </ul>
			<Outlet />
	</div>
  );
}
export default Menu;