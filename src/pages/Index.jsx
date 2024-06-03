import React from "react";
import { Container, Text, VStack, Box, Button, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel, Input, Select, IconButton } from "@chakra-ui/react";
import { FaUser, FaBox, FaTruck, FaClipboardList, FaFileInvoice } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            ERP Material Management Module
          </Text>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Dashboard
          </Text>
          <Text>Overview of material status, procurement status, and inventory levels. Quick access to recent activities and alerts.</Text>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            User Management
          </Text>
          <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
            Add User
          </Button>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>User ID</Th>
                <Th>Username</Th>
                <Th>Role</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>admin</Td>
                <Td>Administrator</Td>
                <Td>
                  <Button size="sm" colorScheme="blue">
                    Edit
                  </Button>
                  <Button size="sm" colorScheme="red" ml={2}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Material Management
          </Text>
          <Button leftIcon={<FaBox />} colorScheme="teal" variant="solid">
            Add Material
          </Button>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Material Number</Th>
                <Th>Description</Th>
                <Th>Unit of Measure</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>MAT001</Td>
                <Td>Steel Rod</Td>
                <Td>KG</Td>
                <Td>
                  <Button size="sm" colorScheme="blue">
                    Edit
                  </Button>
                  <Button size="sm" colorScheme="red" ml={2}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Vendor Management
          </Text>
          <Button leftIcon={<FaTruck />} colorScheme="teal" variant="solid">
            Add Vendor
          </Button>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Vendor Number</Th>
                <Th>Vendor Name</Th>
                <Th>Contact</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>VEND001</Td>
                <Td>ABC Supplies</Td>
                <Td>John Doe</Td>
                <Td>
                  <Button size="sm" colorScheme="blue">
                    Edit
                  </Button>
                  <Button size="sm" colorScheme="red" ml={2}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Procurement Management
          </Text>
          <Button leftIcon={<FaClipboardList />} colorScheme="teal" variant="solid">
            Create Purchase Requisition
          </Button>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>PR Number</Th>
                <Th>Requested By</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>PR001</Td>
                <Td>Jane Smith</Td>
                <Td>Pending</Td>
                <Td>
                  <Button size="sm" colorScheme="blue">
                    Approve
                  </Button>
                  <Button size="sm" colorScheme="red" ml={2}>
                    Reject
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Receiving and Inspection
          </Text>
          <Button leftIcon={<FaClipboardList />} colorScheme="teal" variant="solid">
            Create Goods Receipt
          </Button>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>GR Number</Th>
                <Th>PO Number</Th>
                <Th>Vendor</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>GR001</Td>
                <Td>PO001</Td>
                <Td>ABC Supplies</Td>
                <Td>
                  <Button size="sm" colorScheme="blue">
                    View
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Invoice Verification
          </Text>
          <Button leftIcon={<FaFileInvoice />} colorScheme="teal" variant="solid">
            Create Invoice
          </Button>
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Invoice Number</Th>
                <Th>PO Number</Th>
                <Th>Vendor</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>INV001</Td>
                <Td>PO001</Td>
                <Td>ABC Supplies</Td>
                <Td>Pending</Td>
                <Td>
                  <Button size="sm" colorScheme="blue">
                    Approve
                  </Button>
                  <Button size="sm" colorScheme="red" ml={2}>
                    Reject
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
