// Tömb az információkkal
var contentArray = [
    { headline: 'Winglet', content: 'A winglet is a small, slanted or vertically standing additional aerodynamic surface located at the wingtips of an aircraft. Its purpose is to optimize airflow, reduce fuel consumption, and enhance overall performance.', examples:'' },
    { headline: 'Nose', content: 'The front part of an aircraft or vehicle, typically housing the cockpit and serving as the point of forward motion.', examples:'' },
    { headline: 'Windscreen', content: 'The large, transparent window at the front of an aircraft or vehicle, providing visibility for the occupants.', examples:'' },
    { headline: 'Aerial / Antenna', content: 'A structure or device, often on the top of the fuselage, used for radio communication or navigation', examples:'' },
    { headline: 'Aileron', content: 'Hinged control surfaces on the trailing edge of an aircraft wing, used to control roll by varying the lift on each wing.', examples:'' },
    { headline: 'Spoiler', content: 'A movable surface on the wing, used to disrupt airflow and reduce lift, often deployed during descent and landing.', examples:'' },
    { headline: 'Flap', content: 'Hinged surfaces on the trailing edge of an aircraft wing, used to increase lift or drag, especially during takeoff and landing', examples:'' },
    { headline: 'Outboard slats', content: 'Movable aerodynamic surfaces on the outer part of a wing, typically deployed at lower speeds to improve lift during approach and landing.', examples:'' },
    { headline: 'Fuselage', content: 'The main body of an aircraft, containing the cabin, cockpit, and cargo areas.', examples:'' },
    { headline: 'Rudder', content: 'Movable control surface on the tail of an aircraft, used to control yaw or side-to-side motion.', examples:'' },
    { headline: 'Elevator', content: 'Movable control surface on the tail of an aircraft, used to control pitch or up-and-down motion.', examples:'' },
    { headline: 'Tail fin ', content: 'The tail fin, also known as the vertical stabilizer, is the vertical surface at the rear of an aircraft"s fuselage. It plays a crucial role in providing stability and aiding in directional control during flight. The tail fin is typically mounted vertically and extends upward from the fuselage. It often contains the aircraft"s rudder, a movable control surface attached to the trailing edge of the tail fin. The rudder is used to control the aircraft"s yaw, or side-to-side motion.', examples:'' },
    { headline: 'Tyre', content: 'Rubber covering around a wheel, providing traction and shock absorption for an aircraft during landing and taxiing', examples:'' },
    { headline: 'Engine', content: 'A machine that generates thrust to propel an aircraft forward, typically powered by combustion of fuel.', examples:'' },
    { headline: 'Emergency exit', content: 'A designated opening in an aircraft intended for rapid evacuation in the event of an emergency.', examples:'' },
    { headline: 'Radome', 
                content: 'A protective covering over a radar antenna, designed to be transparent to radio waves.', 
                examples: [
                    'Radomes protect radar systems from harsh weather, ensuring consistent performance.',
                    'Constructed with durable materials, they extend the life of sensitive radar equipment.',
                    'The aerodynamic design minimizes wind impact, maintaining optimal functionality.',
                    'Transparent materials enable seamless radar signal transmission, even in challenging conditions.',
                    'Regular maintenance is crucial for addressing wear and tear, preserving radome effectiveness.',
                    'Precision engineering balances structure and performance.',
                    'Radomes defend against bird strikes and debris, safeguarding radar components.',
                    'Inspections identify and rectify damage, ensuring continued efficacy.',
                    'Durable and resilient, radomes contribute to radar equipment longevity.',
                    'In aviation, radomes meet ICAO Level 4 standards for proficiency.'
                          ]},
    { headline: 'Light', content: 'Illumination devices on an aircraft used for visibility and signaling, including navigation lights and strobes.', examples:'' },
    { headline: 'Slat', content: 'Movable aerodynamic surfaces on the leading edge of a wing, typically deployed at lower speeds to improve lift.', examples:'' }
];

function changeContent(index) {
    var headlineElement = document.getElementById('headline').querySelector('h3');
    var contentElement = document.getElementById('content').querySelector('p');

    // Ellenőrizd, hogy az index a tömb méretén belül van-e
    if (index >= 0 && index < contentArray.length) {
        // Frissítsd a tartalmat a tömbből
        headlineElement.textContent = contentArray[index].headline;
        contentElement.textContent = contentArray[index].content;
    }
}



