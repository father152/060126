import React from "react";
import "./secondhouse.css";
import { Link } from "react-router-dom";
import back from "../../Image/free-icon-back-3183312.png";
import { useState } from "react";



export default function Secondhouse() {
 const [rooms, setRooms] = useState([
    { id: 1, name: "Кімната 1", length: "", width: "" }
  ]);

  // оновлення значень
  const handleChange = (id, field, value) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, [field]: value } : room
      )
    );
  };

  // додати кімнату
  const addRoom = () => {
    setRooms([
      ...rooms,
      {
        id: Date.now(),
        name: `Кімната ${rooms.length + 1}`,
        length: "",
        width: ""
      }
    ]);
  };

  // розрахунок площі кімнати
  const calcRoomArea = (room) => {
    const l = parseFloat(room.length);
    const w = parseFloat(room.width);
    if (isNaN(l) || isNaN(w)) return 0;
    return l * w;
  };

  // загальна площа
  const totalArea = rooms.reduce(
    (sum, room) => sum + calcRoomArea(room),
    0
  );
  return (
    <div className="secondhouse">
      <h2>Second House</h2>
      <div className="secondhouse-container">
      
        <div className="area-calculator">
      <h2>Розрахунок площі квартири (будинку)</h2>

      {rooms.map((room) => (
        <div key={room.id} className="room" >
          <strong>{room.name}</strong><br />

          Довжина (м):
          <input
            type="number"
            value={room.length}
            onChange={(e) =>
              handleChange(room.id, "length", e.target.value)
            }
            
          />

          Ширина (м):
          <input
            type="number"
            value={room.width}
            onChange={(e) =>
              handleChange(room.id, "width", e.target.value)
            }
            style={{ margin: "0 10px" }}
          />

          Площа: <input
            type="number"
            value={calcRoomArea(room).toFixed(2)}
            readOnly
          /> м²
        </div>
      ))}

      <button className="button-room" onClick={addRoom}>➕ Додати кімнату</button>

      <h3>Загальна площа: {totalArea.toFixed(2)} м²</h3>
    </div>
      </div>

      <div className="backtopreviouspage">
        <Link to="/projects">
          <img src={back} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
