import React, { Component } from 'react'
import { View, Image } from 'react-native';
import { Container, Header, Item, Icon, Input, Button, Right, Tab, Tabs, Text, Card, CardItem, Grid, Col, Row, Content, Thumbnail } from 'native-base'

// Styles
import styles from './Styles/LaunchScreenStyles'

class CardProduct extends Component {
  render(){
    return (
        <Card>
          <CardItem>
            <View>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'data:image/png;base64,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'}}
            />
            </View>
          </CardItem>
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
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#000000', height:1}}>
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