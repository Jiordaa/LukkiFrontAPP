/*export default function Footer() {
    return (
        <>
            <footer
                  style={{
                    backgroundColor: "#2C3C18", // зелёный
                    width: "100%",
                    height: 100,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 20px",
                    boxSizing: "border-box",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: "#fff", // белые блоки
                        width: 150,
                        height: 70,
                        borderRadius: 8,
                      }}
                    />
                  ))}
                </footer>

        </>
    );
}
*/

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2C3C18", // зелёный
        width: "100%",
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        boxSizing: "border-box",
      }}
    >
      <img src="/hm.png" alt="HM" style={{ height: 70 }} />
      <img src="/mango1.png" alt="mango1" style={{ height: 70 }} />
      <img src="/reserved.png" alt="reserved" style={{ height: 70 }} />
      <img src="/puma.png" alt="puma" style={{ height: 70 }} />
      <img src="/shein.png" alt="shein" style={{ height: 70 }} />
    </footer>
  );
}

