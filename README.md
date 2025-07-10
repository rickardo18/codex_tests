# MCP Calculator App Use Case (Codex + MCP Workflow)

This project aims to recreate a realistic use case primarily focused on exploring and testing **Model Context Protocols (MCP)** capabilities. The goal is to implement a simple calculator web application, using HTML/CSS from a Figma design and JavaScript for the logic, while leveraging MCP tools to automate and orchestrate the entire software development workflow.

I want to test **Codex** as a developer assistant for structured task generation, implementation, testing, and documentation. MCP tools will handle planning, execution, integration, and reporting.

---

## 🔁 Prompts to Run (in Sequence)

### 1. Project Planning (via Codex/MCP)
> You are a technical project planner tasked with breaking down the development of a calculator web application into a structured list of Jira-compatible tasks and subtasks.  
> Project context:  
> - The UI (HTML/CSS) will be obtained from an existing Figma design.  
> - The calculator logic will be implemented in JavaScript.  
> Your tasks:  
> - Break the implementation into logical phases (e.g. Design Integration, Logic Development, Input Handling, Output Display, Testing).  
> - Within each phase, generate a list of tasks and subtasks in Jira format:  
>   - Each task must include: a title, description, and acceptance criteria.  
>   - Include subtasks as needed to break down technical work.  
>   - Indicate any dependencies between tasks.  
> - Output the task breakdown in a format suitable for direct use in Jira, respecting the Epic → Task → Subtask hierarchy.  
> - Use MCP Sequential Thinking to ensure structure and logic.

---

### 2. Create Tasks in Jira using MCP
> Create those tasks and subtasks in Jira using the MCP tool.

---

### 3. Convert Figma Design to Code
> Generate my Figma selection in plain HTML + CSS  
> [Figma Link](https://www.figma.com/design/BYfG2DC6CIDLEi4SQbDJpe/Calculator-App-Ui-Design-Download-Free--Community-?node-id=74-245&t=MUi54Kfd8VtRJG8X-4)

---

### 4. Implement Calculator Logic
> Implement the logic of the calculator using JavaScript.

---

### 5. Create Unit Tests
> Create some unit tests for the calculator logic.

---

### 6. Create Feature Tests (Selenium)
> Using Selenium, create feature tests that simulate user interactions.

---

### 7. MCP GitHub Commit & Push
> Commit the files in this project and push to `main` using GitHub MCP tools.

---

### 8. Run Performance Audit
> Run a performance audit using Browser MCP.

---

### 9. Documentation & Upload
> Criar documentação técnica e fazer o upload no Confluence.

---

## 🧪 Goal

Test how well **MCP tools** and **Codex** can work together to:
- Plan and decompose a project (Codex)
- Automate Jira creation, coding, testing, auditing (MCP)
- Push and document everything in an end-to-end lifecycle

---

## ✅ Stack
- HTML/CSS (from Figma)
- JavaScript (calculator logic)
- MCP (project orchestration)
- Codex (code generation & task breakdown)
- Selenium (feature tests)
- Jest or similar (unit tests)
- GitHub + Confluence
