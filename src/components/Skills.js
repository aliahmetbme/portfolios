import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap

export default function Skills() {
    const items = [
        "Swift",
        "SwiftUI",
        "Flutter",
        "Dart",
        "Bloc - Cubit",
        "State Management ",
        "Firebase",
        "React",
        "Git",
        "GitHub",
        "Html",
        "CSS",
        "Python",
        "C#",
        "Java",
        "Firebase Real Time DB"
        ,"OOP","MVC","LateX"



    ]; // Örnek bir dizi

    return (
        <section className='skills'>
            <div style={{display:'flex', alignSelf:"center", justifyContent:"center", flexWrap:"wrap"}}>
                {items.map((item, index) => (
                    <div key={index} style={{
                        fontSize: 20, fontFamily: "serif", padding: 10, backgroundColor: "white", margin: 10, justifyItems: "center", display: 'flex', flexWrap: "wrap", borderRadius: 10, textAlign: "center", justifyContent: "center"
                    }}>
                        {item}
                    </div>

                ))}
            </div>
        </section>
    );
}
