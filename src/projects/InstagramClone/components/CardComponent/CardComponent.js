import React, { Component } from 'react';
import { View, Image, Text, Platform } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import styles from './styles';

class CardComponent extends Component {
  render() {
    // console.tran.log('connected - log in reactron');
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../../assets/images/15.jpg')} />
            <Body>
              <Text> Nature </Text>
              <Text note> May 20, 2018 </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../../assets/images/52.jpg')} style={styles.image} />
        </CardItem>
        <CardItem style={styles.iconWrapper}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={styles.icon} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={styles.icon} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={styles.icon} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={styles.likesTextWrapper}>
          <Text>101 likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={styles.nameText}>Nature </Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus leo, placerat non facilisis ac, luctus
              non dolor. Duis pretium dolor tortor, at varius metus lobortis sed. Cras ultrices luctus tincidunt. Nunc
              nec elit id libero convallis mollis. Aliquam non vestibulum quam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In hac habitasse platea dictumst. Fusce eget tristique sem. Vivamus nec odio pharetra,
              lacinia augue ut, dignissim ipsum. Nunc in sodales justo. Duis quis augue at nunc rhoncus condimentum non
              ac risus. 
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
