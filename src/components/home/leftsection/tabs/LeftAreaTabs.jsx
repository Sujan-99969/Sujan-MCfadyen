import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./LeftAreaTabs.css"

const LeftAreaTabs = () => {
  return (
    <div className="Left-Container">
      <Tabs>
        <TabList>
          <Tab>details</Tab>
          <Tab>delivery</Tab>
          <Tab>fit</Tab>
          <Tab>share</Tab>

        </TabList>

        <TabPanel>
          <div className="tab-content">
            <h2>The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel. 
              </h2>
            <p>See the <span>EDITOR’S NOTE</span></p>
            <p>Learn about the <span>DESIGNER</span></p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>Next day dispatch</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>All sizes are avialble</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content">
            <h2>you can share the item</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>
        </TabPanel>
      </Tabs>

    </div> 
  );
};
export default LeftAreaTabs;