import React, { Component }  from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import "./SessionsTable.css";

class SessionsTable extends React.Component {

  convertTwitterHandleToHRef = (twitterHandle) => {
    if (twitterHandle === null) return "";

    return "https://twitter.com/" + twitterHandle.substr(1);
  };

  render() {
    const { sessions } = this.props;

    return (
      <Table className='sessions-table'>
        <Thead className='sessions-table-head'>
          <Tr className='sessions-table-row'>
            <Th className='sessions-table-header'>Track / Code</Th>
            <Th className='sessions-table-header'>Date/Time (UTC)</Th>
            <Th className='sessions-table-header'>Title</Th>
            <Th className='sessions-table-data collapsable'>Description</Th>
            <Th className='sessions-table-header'>Speaker</Th>
          </Tr>
        </Thead>
        <Tbody className='sessions-table-body'>
          {sessions.map((session, i) =>

            <Tr key={i} className='sessions-table-row'>
              <Td className='sessions-table-data'>
                {(session.streaminglink !== null && session.streaminglink !== 'Placeholder') &&
                  <a href={session.streaminglink}>{session.calendarname}</a>
                }
                {(session.streaminglink === null || session.streaminglink === 'Placeholder') &&
                  session.calendarname
                }
                <br />
                <a href={session.calendarlink} >[{session.sessioncode}]</a>
              </Td>
              <Td className='sessions-table-data'>{session.startdate} {session.starttime}</Td>
              <Td className='sessions-table-data'>
                {(session.blogurl !== null) &&
                  <a href={session.blogurl}>{session.subject2}</a>
                }
                {(session.blogurl === null) &&
                  session.subject2
                }
              </Td>
              <Td className='sessions-table-data collapsable'>{session.description}</Td>
              <Td className='sessions-table-data'>
                {(session.useronthesapcommunity !== null && /[,]/.test(session.who) === false) &&
                  <a href={'https://people.sap.com/' + session.useronthesapcommunity}>{session.who}</a>
                }
                {
                  (session.useronthesapcommunity === null || /[,]/.test(session.who) === true) &&
                  session.who
                }
                <br />
                {(session.twitterhandle !== null && /[,]/.test(session.who) === false) &&
                  <a href={this.convertTwitterHandleToHRef(session.twitterhandle)}>({session.twitterhandle})</a>
                }
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    );
  }
}

export default SessionsTable;
