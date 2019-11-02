import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Left, Body, Header, Item, Icon, Input, Button, Right, Tab, Tabs, Text, Card, CardItem, Grid, Col, Row, Content, Thumbnail, View } from 'native-base'

// Styles
import styles from './Styles/HomeScreenStyles'

class CardProduct extends Component {
  render(){
    return (
      <Card>
        <View>
          <Image source={{uri: 'https://marvel-live.freetls.fastly.net/canvas/2019/8/65e5eaf0b83a41c39c756d38ce251bd6?quality=95&fake=.png'}} style={{height: 150, flex: 1}}/>
          <Text>Buah Pisang Ambon</Text>
          <Text>Rp 10.200/500 gram</Text>
          <Button backgroundColor='#646464' height={10}>
            <Text>Beli</Text>
          </Button>
        </View>
        {/* <CardItem >
          <Body>
          </Body>
        </CardItem> */}
      </Card>
    )
  }
}

class TabProduct extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Grid style={{padding:10}}>
            <Row>
              <Col>
                <CardProduct/>
              </Col>
              <Col>
                <CardProduct/>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardProduct/>
              </Col>
              <Col>
                <CardProduct/>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardProduct/>
              </Col>
              <Col>
                <CardProduct/>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}

class TabShop extends Component {
  render () {
    return (
      <Container>
        <Text>toko</Text>
      </Container>
    )
  }
}

export default class SearchResultScreen extends Component {
  render () {
    return (
      <Container>
        <Header searchBar rounded hasTabs
          style={{
            backgroundColor: 'white'
          }}
        >
          <Item
            style={{
              backgroundColor: '#EDEDEA',
            }}
          >
            <Icon name="search" />
            <Input placeholder="Cari daging ayam"/>
          </Item>
          <Right style={{
            flex:0,
          }}>
            <Button transparent>
              <Icon name='cart' style={styles.default}/>
            </Button>
          </Right>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'black', height:1}}>
          <Tab heading="Barang"
              tabStyle={{backgroundColor: 'white'}}
              textStyle={{color: '#47525E'}}
              activeTextStyle={{color: '#47525E', fontWeight: 'normal'}}
              activeTabStyle={{backgroundColor: 'white'}}>
            <TabProduct/>
          </Tab>
          <Tab heading="Toko"
              tabStyle={{backgroundColor: 'white'}}
              textStyle={{color: '#47525E'}}
              activeTextStyle={{color: '#47525E', fontWeight: 'normal'}}
              activeTabStyle={{backgroundColor: 'white'}}>
            <TabShop />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}
