A single column layout with no asides.

```jsx
<div style={{ width: 1440, overflowX: 'auto' }}>
  <OneColumnLayout>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
  </OneColumnLayout>
</div>
```

A single column layout with a side navigation.

```jsx
import IconSettings from ':icons/interface/IconSettings';
import SideBar, { Item } from '../SideBar';

<div style={{ width: 1440, overflowX: 'auto' }}>
  <OneColumnLayout
    sideBar={
      <SideBar accessibilityLabel="Nav">
        <Item icon={<IconSettings accessibilityLabel="Settings" />} />
      </SideBar>
    }
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo erat, lacinia nec porttitor
      sed, mollis sed nibh. Nam porta sit amet risus quis interdum. Sed feugiat lorem vitae augue
      blandit, sed mollis mi laoreet. Donec auctor, enim eget tempus auctor, est lorem laoreet nisi,
      a rutrum dolor quam eget mi. Integer nibh orci, faucibus in dolor ut, maximus euismod erat.
      Nam efficitur vulputate augue non pretium. Suspendisse vitae dui elit. Aliquam erat volutpat.
      Curabitur rutrum id elit ut hendrerit. Pellentesque ullamcorper quam a nibh aliquam bibendum.
      Fusce at fermentum velit. Phasellus malesuada dapibus tincidunt.
    </div>
  </OneColumnLayout>
</div>;
```
