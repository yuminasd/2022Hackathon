import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const style = {
    display: 'flex',
    // flex-direction: row;
    flexDirection: 'row',
    // justify-content: space-between,
    justifyContent: 'space-between', // FIXME: Inspect if space-between or spaceBetween etc. Read React CSS inline style guide
    // align-items: center,
    alignItems: 'center',
    // padding: 36px,
    padding: 36,
    // gap: 10px,
    gap: 10,

    position: 'absolute', // try commenting out and see if ok
    width: 1254, // try commenting out and see if ok
    height: 137, // try commenting out and see if ok
    left: 146, // try commenting out and see if ok
    top: 30, // try commenting out and see if ok

    background: '#FFFFFF',
    /* Drop Shadow */

    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    // boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.25), // FIXME: Google this one
    // border-radius: 36px,
    borderRadius: 36,
  }

  return (
    // <Container>
    //   <div style={{height: 135}}>
    //     <Row>
    //       <Col>
    //         Welcome Home Arnold
    //       </Col>
    //       <Col>
    //         Points: 4000
    //       </Col>
    //     </Row>
    //   </div>
      
    // </Container>
    // <div style={style}>
    //   <span>Welcome Home Arnold!</span>
    //   <div>
    //     <div><span>Points: 7083</span></div>
    //     <div><span>+100</span></div>
    //   </div>
    // </div>
      <div class="e28_78 d-flex align-items-center" >
        <span class="e20_526 d-flex align-items-center">Welcome Home Arnold!</span>
        {/* <div class="e42_802">
          <div class="e28_77"><span  class="e20_67">Points: 7083</span></div>
          <div class="e42_800"><span  class="e42_801">+100</span></div>
        </div> */}
        <div class="me-auto">
          <Button  variant="primary">Points: 7083</Button>
        </div>
      </div>
  )
}

export default Header
