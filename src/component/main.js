import React from "react";

class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.header1}>
              <div style={styles.title}>
                <div style={styles.line1}>Join our community</div>
              </div>
              <div style={styles.textheader1}>
                <div style={styles.textHeader}>
                  30-day,hassle-free money back guarantee
                </div>
              </div>
              <div style={styles.textHeader2}>
                <div style={styles.textHeader3}>
                  Gain access to our full library of tutorials along with expert
                  code reviews. Perfect for any developers who are serious about
                  honing their skills
                </div>
              </div>
            </div>
          </div>
          <div style={styles.body}>
            <div style={styles.body1}>
              <div style={styles.bodyDell1}>
                <div style={styles.frames1}>
                  <div style={styles.titleBody1}>Monthy Subscription</div>
                </div>
                <div style={styles.frames2}>
                  <div style={styles.titleBody2}>$29 </div>
                  <div style={styles.titleBody4}>per month</div>
                </div>
                <div style={styles.frames3}>
                  <div style={styles.titleBody3}>
                    Full access for less than $1 a day
                  </div>
                </div>
                <div style={styles.button1}>
                  <div style={styles.button}>
                    <div style={styles.button2}>Sign Up</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.body2}>
              <div style={styles.bodyDell2}>
                <div style={styles.title4}>
                  <div style={styles.textBody}>Why Us</div>
                  <div style={styles.Genius}>
                    <div style={styles.textBody2}>
                      Tutorrials by industry experts Peer & expert code review
                      Coding exercies. Access to our Github repos Community
                      forum Flashcard decks New videos every week
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  header1: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    padding: "0px 0px 0px 20px",
  },
  body: {
    width: "100%",
    height: "50%",
    display: "flex",
  },
  body1: {
    width: "50%",
    height: "100%",
    backgroundColor: "#2bb3b1",
  },
  body2: {
    width: "50%",
    height: "100%",
    backgroundColor: "#4abebd",
    // padding: "30px 0px 10px 30px",
  },
  bodyDell1: {
    width: "50%",
    height: "80%",
    padding: "30px 0px  10px 40px",
  },
  bodyDell2: {
    width: "50%",
    height: "80%",
    padding: "30px 30px 30px 30px",
  },
  title: {
    width: "100%",
    height: 60,
    padding: "30px 0px 10px 30px",
  },
  line1: {
    color: "#5da199",
    fontSize: "35px",
    fontWeight: "500",
  },
  textHeader: {
    color: "#cad48f",
    fontSize: "25px",
    fontWeight: 600,
  },
  textheader1: {
    width: "100%",
    height: 60,
    padding: "20px 0px 10px 30px",
  },
  textHeader2: {
    width: "100%",
    height: 30,
    padding: "10px 0px 10px 30px",
  },
  textHeader3: {
    color: "gray",
    fontSize: "20px",
  },
  frames1: {
    width: "100̀%",
    height: 50,
    padding: "10px 0px 0px 10px",
  },
  frames2: {
    width: "60%",
    height: 50,
    display: "flex",
    alignItems: "center",
    padding: "10px 0px 0px 10px",
  },
  frames3: {
    width: "100%",
    height: 50,
    padding: "10px 0px 0px 10px",
  },
  titleBody1: {
    color: "white",
    fontSize: "30px",
  },
  titleBody2: {
    color: "white",
    fontSize: "28px",
    marginRight: "10px",
    fontWeight: 600,
  },
  titleBody3: {
    color: "white",
    fontSize: "20px",
    fontWeight: 400,
  },
  titleBody4: {
    color: "white",
    fontSize: "16px",
  },
  title4: {
    width: "100%",
    height: 60,
    padding: "10px 0px 0px 10px",
  },

  textBody: {
    color: "white",
    fontSize: "30px",
    fontWeight: 600,
  },
  Genius: {
    width: "100%",
    height: "100%",
    padding: "30px 0px 0px 0px",
  },
  textBody2: {
    color: "white",
    fontSize: "20px",
  },

  button1: {
    width: "100%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 0px 0px 100px",
  },
  button2: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "1px 2px 2px 1px rgba(0,0,0,0.1)",
    fontWeight: 700,
  },
  button: {
    width: "100%",
    height: 50,
    color: "white",
    borderRadius: "6px",
    backgroundColor: "#c3dc38",
  },
};
export default Main;
