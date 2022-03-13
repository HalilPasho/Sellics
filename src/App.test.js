import { render, screen } from "@testing-library/react";
import App from "./App";
import Image from "./components/Images";
import ApprovedImageList from "./components/ApprovedImageList";

const mock = {
  categories: [],
  color: "#d9d9d9",
  created_at: "2022-03-01T11:29:24-05:00",
  current_user_collections: [],
  description: null,
  downloads: 1205,
  id: "cac0QhXr_kc",
  likes: 20,
  urls: {
    small:
      "https://images.unsplash.com/photo-1646152159606-2b…fHx8fHx8fDE2NDcxODg5MTI&ixlib=rb-1.2.1&q=80&w=400",
  },
};

const mockPreloaded = [
  {
    newImage:
      "https://images.unsplash.com/photo-1646152159606-2b5aca677290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDkzNTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDcxODg5MTI&ixlib=rb-1.2.1&q=80&w=400",
  },
];

test("renders the App component", () => {
  render(<App />);
  const headerTitle = screen.getByText(/Image Approval Application/i);
  const approvedImagesTitle = screen.getByText(/Approved Images/i);
  expect(headerTitle).toBeInTheDocument();
  expect(approvedImagesTitle).toBeInTheDocument();
});

test("renders Images component", () => {
  render(<Image images={mock} />);
  const headerTitle = screen.getAllByRole("img");

  expect(<Image images={mock} />).toBeTruthy();
  expect(headerTitle).toBeTruthy();
  expect(headerTitle[0]).toHaveAttribute("alt", "unsplash_Image");
  expect(headerTitle[1]).toHaveAttribute("alt", "reject");
  expect(headerTitle[2]).toHaveAttribute("alt", "approve");
});

test("renders Approved list component", async () => {
  render(<ApprovedImageList preloadedState={mockPreloaded} />);

  expect(<img alt="right-arrow" src="right-arrow.png" />).toBeTruthy();
  expect(<img alt="left-arrow" src="left-arrow.png" />).toBeTruthy();
});
