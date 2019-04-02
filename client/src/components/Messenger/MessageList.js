import React from 'react';
import propTypes from 'prop-types';
import { messageShape } from 'constants/propTypeShapes';
import MessageItem from './MessageItem';
import { AutoSizer, List as VirtualizedList, CellMeasurer, CellMeasurerCache } from 'react-virtualized'


class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();

    this.cachedWidth = null;
    this.cache = new CellMeasurerCache({
      // List scrollToRow uses this value, so it is much higher than the average
      defaultHeight: 150,
      fixedWidth: true,
      keyMapper: (index) => {
        return this.props.messages[index].id;
      },
    });
    this.renderRow = this.renderRow.bind(this);
    // FIXME rel issue with scrollToRow in react-virtualized
    this.firstScroll = true;
  }

  scrollChat() {
    requestAnimationFrame(() => {
      if (this.firstScroll) {
        this.listRef.scrollToRow(parseInt(this.props.messages.length / 2));
        this.firstScroll = true;
      }
      this.listRef.scrollToRow(this.props.messages.length+1);
    });
  }

  componentDidMount() {
    this.scrollChat();
  }

  componentDidUpdate(prevProps) {
    // TODO don't scroll down on new messages
    this.scrollChat();
  }

  renderRow = ({ index, style, parent }) => {
    const message = this.props.messages[index];
    return (
      <CellMeasurer
        key={message.id}
        cache={this.cache}
        columnIndex={0}
        parent={parent}
        rowIndex={index}
        width={this.cachedWidth}
      >
        <div style={style}>
          <MessageItem message={message}/>
        </div>
      </CellMeasurer>
    );
  };

  render() {
    return (
      <AutoSizer>
        {dimensions => {
          // TODO something is wrong with react-virtualized computation due to the borders of the wrapper
          const computedWidth = dimensions.width - 4;
          if (this.cachedWidth !== null && this.cachedWidth !== computedWidth) {
            this.cache.clearAll();
            this.listRef.recomputeRowHeights();
          }
          if (dimensions.width > 0) {
            this.cachedWidth = computedWidth;
          }

          return (
            <VirtualizedList
              id="virtualized-list"
              className="virtualized-list"
              ref={ref => {this.listRef = ref}}
              width={computedWidth}
              height={dimensions.height - 2}
              rowCount={this.props.messages.length}
              deferredMeasurementCache={this.cache}
              rowHeight={this.cache.rowHeight}
              rowRenderer={this.renderRow}
            />
          );
        }}
      </AutoSizer>
    );
  }
}

MessageList.propTypes = {
  messages: propTypes.arrayOf(messageShape).isRequired,
};

export default MessageList;
