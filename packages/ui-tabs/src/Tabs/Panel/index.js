/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { View } from '@instructure/ui-layout'
import { testable } from '@instructure/ui-testable'
import { themeable, ThemeablePropTypes } from '@instructure/ui-themeable'
import { Transition } from '@instructure/ui-motion'

import styles from './styles.css'
import theme from './theme'

/**
---
parent: Tabs
---
**/
@testable()
@themeable(theme, styles)
class Panel extends Component {
  static propTypes = {
    /**
    * The content that will be rendered in the corresponding <Tab /> and will label
    * this `<TabPanel />` for screen readers
    */
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'secondary']),
    maxHeight: PropTypes.string,
    minHeight: PropTypes.string,
    id: PropTypes.string,
    labelledBy: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    padding: ThemeablePropTypes.spacing,
    textAlign: PropTypes.oneOf(['start', 'center', 'end']),
    /**
    * A ref to this `<TabPanel />` component instance
    */
    tabRef: PropTypes.func
  }

  static defaultProps = {
    children: null,
    id: undefined,
    disabled: false,
    maxHeight: undefined,
    minHeight: undefined,
    textAlign: 'start',
    variant: 'default',
    labelledBy: null,
    selected: false,
    padding: 'small',
    tabRef: (el) => {}
  }

  renderContent () {
    const classes = {
      [styles.content]: true,
      [styles.overflow]: this.props.maxHeight
    }
    return (
      <View
        className={classnames(classes)}
        maxHeight={this.props.maxHeight}
        minHeight={this.props.minHeight}
        as="div"
        padding={this.props.padding}
        textAlign={this.props.textAlign}
      >
        {this.props.children}
      </View>
    )
  }

  render () {
    const classes = {
      [styles.root]: true,
      [styles[this.props.variant]]: true
    }
    const isHidden = !this.props.selected || !!this.props.disabled

    return (
      <div
        className={classnames(classes)}
        role="tabpanel"
        id={this.props.id}
        aria-labelledby={this.props.labelledBy}
        aria-hidden={isHidden ? 'true' : null}
      >
        <Transition
          type="fade"
          in={!isHidden}
          unmountOnExit
          transitionExit={false}
        >
        {this.renderContent()}
        </Transition>
      </div>
    )
  }
}

export default Panel
export { Panel }
