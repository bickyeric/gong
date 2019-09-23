import React, { Component } from 'react'
import { Item, Container, Header, Input, Content, Footer, FooterTab, Button, Right, Icon, Text } from 'native-base'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <Container>
        <Header noLeft searchBar rounded
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
        <Content padder>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button onPress={() => {
              alert("bangsat");
            }}>
              <Icon name="home" style={styles.default}/>
              <Text style={styles.default}>Beranda</Text>
            </Button>
            <Button>
              <Icon type='Entypo' name="chat" style={styles.default}/>
              <Text style={styles.default}>Chat</Text>
            </Button>
            <Button>
              <Icon name="ios-repeat" style={styles.default}/>
              <Text style={styles.default}>Transaksi</Text>
            </Button>
            <Button>
              <Icon name="person" style={styles.default}/>
              <Text style={styles.default}>Akun</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
