async function handleResponse(response) {
    try {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
        }
        return await response.json();
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function createCampaign(campaignData) {
    try {
        const response = await fetch('/api/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campaignData)
        });
        return await handleResponse(response);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getFeaturedPrograms() {
    try {
        const response = await fetch('/api/programs/featured');
        return await handleResponse(response);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function submitDonation(donationData) {
    try {
        const response = await fetch('/api/donations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donationData)
        });
        return await handleResponse(response);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function subscribeNewsletter(email) {
    try {
        const response = await fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        return await handleResponse(response);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getTestimonials() {
    try {
        const response = await fetch('/api/testimonials');
        return await handleResponse(response);
    } catch (error) {
        reportError(error);
        throw error;
    }
}
